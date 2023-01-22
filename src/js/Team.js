export default class Team {
  constructor() {
    this.members = new Set([
      { name: 'Bowman' },
      { name: 'Swordsman' },
      { name: 'Magician' },
      { name: 'Daemon' },
      { name: 'Bowman' },
    ]);
  }

  [Symbol.iterator]() {
    const charList = Array.from(this.members);
    let current = 0;
    const end = charList.length - 1;

    return {
      next() {
        if (current <= end) {
          // eslint-disable-next-line no-plusplus
          return { done: false, value: charList[current++] };
        }
        return { done: true };
      },
    };
  }
}
