<template>
  <div class="flex flex-col justify-center font-display mx-3">
    <div class="text-white w-20px">
      <div class="flex justify-between py-6 mx-4">
        <div class="flex">
          <img @click="goToMain" class="w-[60px] h-[60px] rounded-full" src="./icons/arrow.svg" alt="">
          <div class="flex flex-col pt-[0.625rem] mt-1 pl-3">
            <h1 class="text-dark-green font-display font-semibold text-2xl">Запись</h1>
          </div>
        </div>
        <div class="mt-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
          <img src="../../public/logo.png" alt="" class="">
        </div>
      </div>
    </div>

    <div class="relative mx-4">
      <div class="relative">
        <img class="fixed-size rounded-[20px]" :src="post.media" alt="">
      </div>
      <div class="relative -mt-6 bg-green rounded-[20px] text-center text-white p-4 text-overlay">
        <h1 class="pb-3 text-[20px] font-bold">{{ post.title }}</h1>
        <span class="text-[14px]">{{ post.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostCard',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToMain() {
      this.$router.push('/');
    },
  },
  data() {
    return {
      post: {
        title: '',
        text: '',
        media: '',
        type: ''
      }
    };
  },
  async created() {
    try {
      const response = await axios.get('https://vk-parser.onrender.com/api/posts');
      if (response.data.response && response.data.response.items) {
        const postItem = response.data.response.items.find(item => item.id === this.id);
        if (postItem) {
          let mediaUrl = '../../public/logo.png'; // Placeholder для постов без медиа
          let type = 'none'; // Указываем тип как 'none' для постов без медиа
          if (postItem.attachments && postItem.attachments.length > 0) {
            const photoAttachments = postItem.attachments.filter(att => att.type === 'photo');
            const albumAttachment = postItem.attachments.find(att => att.type === 'album');
            const videoAttachment = postItem.attachments.find(att => att.type === 'video');

            if (photoAttachments.length > 0) {
              mediaUrl = photoAttachments[0].photo.sizes.sort((a, b) => b.width - a.width)[0].url;
              type = 'photo';
            } else if (albumAttachment && albumAttachment.album && albumAttachment.album.thumb) {
              mediaUrl = albumAttachment.album.thumb.sizes.sort((a, b) => b.width - a.width)[0].url;
              type = 'album';
            } else if (videoAttachment && videoAttachment.video) {
              mediaUrl = `https://vk.com/video_ext.php?oid=${videoAttachment.video.owner_id}&id=${videoAttachment.video.id}&hash=${videoAttachment.video.access_key}`;
              type = 'video';
            }
          }

          const titleWords = postItem.text.split(' ').slice(0, 3).join(' ') + '...';
          const remainingText = postItem.text.split(' ').slice(3).join(' ');

          this.post = {
            title: titleWords,
            text: remainingText,
            media: mediaUrl,
            type: type
          };
        }
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching post:', error.message);
    }
  }
};
</script>

<style scoped>
.fixed-size {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.text-overlay {
  margin-top: -2.2rem; /* Отрицательный верхний margin для заезда на картинку */
  padding-top: 1.5rem; /* Padding чтобы текст не прилипал к картинке */
}
</style>
