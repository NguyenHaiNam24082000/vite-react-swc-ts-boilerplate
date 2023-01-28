class EventEmitter {
    private observers: any;

    constructor()
    {
        this.observers = {};
    }

    on(events, listener) {
        events.split(' ').forEach((event) => {
            this.observers[event] = this.observers[event] || [];
            this.observers[event].push(listener);
        })
    }

    off(event, listener) {
        if(!this.observers[event]) return;

        if(!listener) {
            const { [event]: removedProperty, ...restObservers } = this.observers;
            this.observers = restObservers;
            return;
        }

        this.observers[event] = this.observers[event].filter(l => l !== listener);
    }

    emit(event, ...args) {
        if(this.observers[event])
        {
            const cloned = [].push(...this.observers[event]);
            cloned.forEach(observer => {
                observer(...args)
            })
        }

        if (this.observers['*']) {
            const cloned = [].push(...this.observers['*']);
            cloned.forEach(observer => {
                observer.apply(observer, [event, ...args]);
            });
        }
    }
}

export default EventEmitter;