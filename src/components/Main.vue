<template>
  <div class="flex flex-col justify-center font-display mx-3">
    <div class="text-white w-20px">
      <div class="flex justify-between py-6 mx-4">
        <div class="flex">
          <img src="../../public/userLogo.svg" class="w-[60px] h-[60px] border-2 border-green rounded-full" alt="User Photo">
          <div class="flex flex-col pt-[0.625rem] pl-2">
            <span class="text-black font-display text-xs font-thin">Привет, <br></span>
            <h1 class="text-dark-green font-display font-semibold text-xl">{{ user.username || 'Профсоюзовец' }}</h1>
          </div>
        </div>
        <div class="mt-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
          <img src="../../public/logo.png" alt="" class="">
        </div>
      </div>
    </div>

    <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

    <div class="flex justify-between mx-4 py-6 font-semibold">
      <button @click="goToContacts" class="min-[415px]:w-[180px] max-[350px]:w-[142px] max-[375px]:w-[152px] flex py-6 items-center w-[160px] h-[40px] bg-green text-white rounded-lg">
        <img class="min-[415px]:ml-[22px] max-[350px]:ml-[6px] max-[350px]:mr-[1.5px] max-[375px]:ml-[8px] w-5 ml-[11px] mr-1" src="./icons/contacts.svg" alt="">
        <span class="text-[17px]">
          Контакты
        </span>
      </button>
      <button @click="goToAbout" class="min-[415px]:w-[180px] max-[350px]:w-[142px] max-[375px]:w-[152px] flex items-center w-[160px] bg-green text-white rounded-lg">
        <img class="min-[415px]:mr-2 min-[415px]:ml-[40px] max-[350px]:ml-[6px] max-[375px]:ml-[10px] w-6 ml-3 mr-5" src="./icons/info.svg" alt="">
        <span class="text-[17px]">
          О нас
        </span>
      </button>
    </div>

    <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

    <div class="flex flex-col justify-center mx-4">
      <div class="py-4">
        <h1 class="text-xl font-semibold text-dark-green">
          Новости
        </h1>
      </div>
      <div class="flex flex-col" v-if="posts.length">
        <div v-for="post in displayedPosts" :key="post.id" class="flex mb-4 bg-green rounded-[20px]" :class="{'h-[150px]': post.type === 'video' && !post.text, 'h-[150px]': !(post.type === 'video' && !post.text)}">
          <div class="w-[40%] overflow-hidden rounded-[20px]" :class="{'w-full': post.type === 'video' && !post.text}">
            <template v-if="post.type === 'photo' || post.type === 'album'">
              <img :src="post.media" class="w-full h-full object-cover bg-white">
            </template>
            <template v-if="post.type === 'video'">
              <iframe :src="post.media" class="w-full h-full object-cover bg-white" frameborder="0" allowfullscreen></iframe>
            </template>
            <template v-else>
              <img src="../../public/logo.png" class="w-full h-full object-cover bg-white">
            </template>
          </div>
          <div v-if="post.type !== 'video' || post.text" class="relative flex flex-col items-center px-[4px] w-[60%] overflow-hidden">
            <h1 class="pt-4 font-semibold text-center text-white text-wrap break-words flex-grow-0 flex-shrink-0">{{ truncateTitle(post.title) }}</h1>
            <div class="flex-grow flex flex-col items-center justify-center">
              <span class="w-[90%] pb-3 text-center text-white text-[11px] text-wrap break-words">{{ truncateText(post.text, 30) }}</span>
            </div>
            <button @click="goToPost(post.id)" class="w-[80%] mb-4 pb-[1.5px] text-white border-[1px] border-white rounded-md">Подробнее</button>
          </div>
        </div>
      </div>
      <div class="flex justify-center" v-if="posts.length > displayedPosts.length">
        <button @click="loadMore" class="w-[50%] my-3 px-3 py-1 text-dark-green border-dark-green text-center border-[1px] border-black rounded-md">
          Смотреть еще
        </button>
      </div>
      <div class="flex justify-center" v-else-if="!posts.length">
        <span class="w-[50%] my-3 px-3 py-1 text-dark-green border-dark-green text-center border-[1px] border-black rounded-md">
          Загрузка новостей...
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',
  data() {
    return {
      posts: [],
      currentDisplayIndex: 3, // Начальное количество отображаемых постов
      user: {
        username: '',
        photo: ''
      }
    };
  },
  computed: {
    displayedPosts() {
      return this.posts.slice(0, this.currentDisplayIndex);
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://vk-parser.onrender.com/api/posts');
        if (response.data.response && response.data.response.items) {
          this.posts = response.data.response.items
            .filter(item => !item.copy_history) // Убираем репосты
            .map(item => {
              let mediaUrl = '../../public/logo.png'; // Placeholder для постов без медиа
              let type = 'none'; // Указываем тип как 'none' для постов без медиа
              if (item.attachments && item.attachments.length > 0) {
                const photoAttachments = item.attachments.filter(att => att.type === 'photo');
                const albumAttachment = item.attachments.find(att => att.type === 'album');
                const videoAttachment = item.attachments.find(att => att.type === 'video');

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
              const regex = /^(.+?)\s*(?=\n|$)/s; // Регулярное выражение для поиска заголовка
              const matches = regex.exec(item.text); // Ищем заголовок
              const title = matches ? matches[1] : ''; // Получаем заголовок или оставляем пустую строку, если заголовок не найден
              let text = '';
              if (matches && item.text.replace(matches[0], '').trim().length > 0) {
                text = item.text.replace(matches[0], '').trim(); // Убираем заголовок из текста
              } else {
                text = item.text.trim(); // Если заголовка нет или текст после заголовка пустой, оставляем весь текст
              }

              return {
                id: item.id,
                title: item.text.split('\n')[0],
                text: text,
                media: mediaUrl,
                type: type
              };
            });
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    },
    loadMore() {
      this.currentDisplayIndex += 3; // Увеличиваем количество отображаемых постов на 3
    },
    goToContacts() {
      this.$router.push('/contacts');
    },
    goToAbout() {
      this.$router.push('/about');
    },
    goToPost(postId) {
      this.$router.push({ name: 'PostCard', params: { id: postId } });
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    truncateTitle(title) {
      const words = title.split(' ');
      if (words.length > 2) {
        const truncatedWords = words.slice(0, 2);
        if (truncatedWords[1].length > 7) {
          truncatedWords[1] = truncatedWords[1].substring(0, 7) + '...';
        }
        return truncatedWords.join(' ');
      } else if (words.length === 2 && words[1].length > 7) {
        return `${words[0]} ${words[1].substring(0, 7)}...`;
      }
      return title;
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.text-wrap {
  word-wrap: break-word;
}
.single-line {
  text-align: center;
  line-height: 1; /* Настройка для однострочных заголовков */
}
</style>
