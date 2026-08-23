// nova-reactive-store-8
class NovaCore {
  constructor() {
    this.name = 'nova-reactive-store-8';
    this.active = true;
  }
  status() { return { name: this.name, status: 'operational' }; }
}
module.exports = NovaCore;
