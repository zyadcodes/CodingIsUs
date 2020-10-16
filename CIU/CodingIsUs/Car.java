public class Car {

    String name;
    String color;

    public Car(String name, String color) {
        name = name;
        color = color;
    }

    public static void howManyWheels() {
        System.out.println("Four Wheels!!!");
    }

    public void drive() {
        System.out.println(name);
    }

    public void brake() {
        System.out.println("Nadeen's brakes are amazinggggggg!");
    }

    public void show(boolean hi) {
        if (hi == true) {
            System.out.println("HI HEIDI");
        } else {
            System.out.println("BYE COREYYYY");
        }
    }

}