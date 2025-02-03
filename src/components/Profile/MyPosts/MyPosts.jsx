import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={s.posts}>
        <Post
          title="Звук клавиш печатной машинки определил дальнейшее развитие"
          text="Сложно сказать, почему сделанные на базе интернет-аналитики выводы и по сей день остаются уделом либералов, которые жаждут быть преданы социально-демократической анафеме."
        />
        <Post
          title="Не следует забывать, что чистосердечное признание облегчает душу"
          text="Задача организации, в особенности же дальнейшее развитие различных форм деятельности создаёт предпосылки для анализа существующих паттернов поведения."
        />
        <Post
          text={
            'Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
          }
        />
      </div>
    </div>
  );
};

export default MyPosts;
