import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday' : '111111',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '정의현',
  'birthday' : '000801',
  'gender': '여자',
  'job': '멋쟁이'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이상오!@@@@',
  'birthday' : '33333333',
  'gender': '남자',
  'job': '직장인'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}

              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
