import './App.css';
import { format } from 'date-fns';
import TwitterIcon from './components/icon';

const array = [
  {source: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
  text: 'HEY'
  },
  {source: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
  text: 'LET\'S'
  },
  {source: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
  text: 'GIVE'
  },
  {source: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
  text: 'ALL'
  },
  {source: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
  text: 'YOU CAN'
  }
]

function App() {
  const date = new Date();
  const formattedDate = format(date, 'dd.MM.yy HH:mm');
  console.log(formattedDate);
  return (
    <div>
      <div className='main'>
        <div className='icon-wrapper'><TwitterIcon/></div>
        <input  type="text"/>
        <div className='date'>{formattedDate}</div>
      </div>
      <div className='images-wrapper'>
      {array.map( (item) => {
        return <div className='container'>
          <img src={item.source}/>
          <text className='text-centered'>{item.text}</text>
        </div>
      })}
    </div>
    </div>
  );
}

export default App;
