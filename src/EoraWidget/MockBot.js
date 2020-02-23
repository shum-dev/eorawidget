import Message from './Message';
import botIcon from './icons/botIcon.svg';

const messagesStack = [
  {
    text: 'Последнее обычное сообщение',
    preAnswers: [],
    locked: false
  },
  {
    text: 'Сообщение с готовыми ответами и блокировкой инпута.',
    preAnswers: [
      {
        msg: "Да!",
      },
      {
        msg: "Нет!"
      },
      {
        msg: "Наверное!"
      },
      {
        msg: "Точно!"
      },
      {
        msg: "Да, везите ее скорей!"
      }
    ],
    locked: true
  },
  {
    text: 'А это сообщение с готовыми ответами. \nПиши еще или выбери готовый ответ...',
    preAnswers: [
      {
        msg: "Да!",
      },
      {
        msg: "Нет!"
      }
    ],
    locked: false
  },
  {
    text: 'Привет! Это обычное сообщение. \nПиши еще что нибудь...',
    preAnswers: [],
    locked: false
  },
]

class MockBot {
  constructor(name, icon, welcome) {
    this.id = 9;
    this.name = name;
    this.icon = icon;
    this.welcome = welcome;
    this.action = null;
    this.messages = [...messagesStack];
  };

  saySomething() {
    const currentMsg = this.messages.pop();

    if (!currentMsg) {
      this.messages = [...messagesStack];
      return this.action([]);
    }

    const newMessage = new Message(
      { id: this.id, firstname: this.name },
      currentMsg.text,
      currentMsg.preAnswers,
      currentMsg.locked);

    setTimeout(() => {
      this.action((prevState) => ([
        ...prevState,
        newMessage
      ]));
    }, 1000);
  };

  init(baseMethod) {
    this.action = baseMethod;
  };
}

const welcome = {
  title: "Привет, я онлайн",
  message: `Есть вопросы? Спрашивай! \nЯ с ними обязательно справлюсь.`
}


export default new MockBot('Бот', botIcon, welcome);