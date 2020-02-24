class Message {
  constructor(author, text, preAnswers = [], locked = false) {
    this.author = author;
    this.text = text;
    this.preAnswers = preAnswers;
    this.locked = locked;
    this.timestamp = new Date();
  }
}

export default Message;
