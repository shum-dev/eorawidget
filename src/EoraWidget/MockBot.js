import Message from './Message';
import botIcon from './icons/botIcon.svg';

const messagesStack = [
  {
    text: 'The last simple message',
    preAnswers: [],
    locked: false,
  },
  {
    text: 'The message with pre-defined answers and the input block.',
    preAnswers: [
      {
        msg: 'Yes!',
      },
      {
        msg: 'No!',
      },
      {
        msg: 'Maybe!',
      },
      {
        msg: 'Exactly!',
      },
      {
        msg: 'Yes, deliver it!',
      },
    ],
    locked: true,
  },
  {
    text: 'This it the message with pre-defined answers. \nWrite more or choose the option ...',
    preAnswers: [
      {
        msg: 'YES!',
      },
      {
        msg: 'NO!',
      },
    ],
    locked: false,
  },
  {
    text: 'Hello! This is an example of a message. \nWrite more...',
    preAnswers: [],
    locked: false,
  },
];

class MockBot {
  constructor(name, icon, welcome) {
    this.id = 9;
    this.name = name;
    this.icon = icon;
    this.welcome = welcome;
    this.action = null;
    this.messages = [...messagesStack];
  }

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
      currentMsg.locked,
    );

    return setTimeout(() => {
      this.action((prevState) => ([
        ...prevState,
        newMessage,
      ]));
    }, 1000);
  }

  init(baseMethod) {
    this.action = baseMethod;
  }
}

const welcome = {
  title: "Hi! I'm online",
  message: 'Do you have any questions? Ask me! \nI can handle it.',
};


export default new MockBot('Bot', botIcon, welcome);
