import avatar1 from '../images/1.jpg';
import avatar2 from '../images/2.jpg';
import avatar3 from '../images/3.jpg';
import avatar5 from '../images/5.jpg';

const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        text: 'Звук клавиш печатной машинки определил дальнейшее развитие',
        likesCount: 10
      },
      {
        id: 2,
        text: 'Постоянный количественный рост не стал ограничивающим фактором',
        likesCount: 5
      },
      {
        id: 3,
        text: 'Но семантический разбор внешних противодействий не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
        likesCount: 2
      }
    ],
    newPostText: ''
  },

  messagesPage: {
    users: [
      { id: 1, name: 'Anastasia' },
      { id: 2, name: 'Bogdan' },
      { id: 3, name: 'Polly' }
    ],

    messages: [
      { id: 1, text: 'Доброе утро ❤️', from: 'user' },
      { id: 2, text: 'Доброе утро ❤️', from: 'me' },
      {
        id: 3,
        text: 'Сука Как сделать чтобы в тик токи не было видно видео',
        from: 'user'
      }
    ],

    newMessageText: ''
  },

  sidebarPage: {
    friends: [
      {
        id: 1,
        name: 'Alexey',
        age: 25,
        city: 'Moscow',
        avatar: avatar1
      },
      {
        id: 2,
        name: 'Maria',
        age: 23,
        city: 'Saint-Petersburg',
        avatar: avatar2
      },
      {
        id: 3,
        name: 'Ivan',
        age: 27,
        city: 'Novosibirsk',
        avatar: avatar3
      },
      {
        id: 4,
        name: 'Olga',
        age: 22,
        city: 'Kazan',
        avatar:
          'https://pm1.aminoapps.com/7099/7d9e3d87e3e0bb58e097e2f974cfefe859d85eacr1-960-960v2_hq.jpg'
      },
      {
        id: 5,
        name: 'Dmitriy',
        age: 26,
        city: 'Ekaterinburg',
        avatar: avatar5
      }
    ]
  }
};

let render = () => {};

export const addPost = () => {
  const newPost = {
    id: Math.max(...state.profilePage.posts.map((obj) => obj.id)) + 1,
    text: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  render(state);
};

export const updateNewPostText = (postText) => {
  state.profilePage.newPostText = postText;
  render(state);
};

export const sendMessage = () => {
  const newMessage = {
    id: Math.max(...state.messagesPage.messages.map((obj) => obj.id)) + 1,
    text: state.messagesPage.newMessageText,
    from: 'me'
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = '';
  render(state);
};

export const updateNewMessageText = (messageText) => {
  state.messagesPage.newMessageText = messageText;
  render(state);
};

export const subscribe = (observer) => {
  render = observer;
};

export default state;
