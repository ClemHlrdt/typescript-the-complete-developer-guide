type Callback = () => void;

export class Eventing {

  events: { [key: string]: Callback[]; } = {};

  // Declare event and add it to the events object
  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // Trigger an event
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  };
}