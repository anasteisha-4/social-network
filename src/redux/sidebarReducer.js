import avatar1 from '../images/1.jpg';
import avatar2 from '../images/2.jpg';
import avatar3 from '../images/3.jpg';
import avatar5 from '../images/5.jpg';

const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  const newState = structuredClone(state);
  return newState;
};

export default sidebarReducer;
