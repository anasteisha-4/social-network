const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        text: 'Звук клавиш печатной машинки определил дальнейшее развитие',
        likesCount: 0
      },
      {
        id: 2,
        text: 'Постоянный количественный рост не стал ограничивающим фактором',
        likesCount: 5
      },
      {
        id: 3,
        text: 'Но семантический разбор внешних противодействий не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
        likesCount: 10
      }
    ]
  },

  messagesPage: {
    users: [
      { id: 1, name: 'Anastasia' },
      { id: 2, name: 'Bogdan' },
      { id: 3, name: 'Polly' }
    ],

    messages: [
      { id: 1, text: 'Привет! Как дела?', from: 'user' },
      { id: 2, text: 'Здравствуй! Я учу React, уже на 21 уроке', from: 'me' },
      { id: 3, text: 'Ничего себе! Молодец)', from: 'user' }
    ]
  }
};

export default state;
