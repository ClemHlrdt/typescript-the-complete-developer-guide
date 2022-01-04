class Vehicule {

  constructor(public color: string) { }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicule = new Vehicule('orange');
console.log(vehicule.color);


class Car extends Vehicule {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');

car.startDrivingProcess();