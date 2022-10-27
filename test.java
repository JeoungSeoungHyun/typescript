class Animal{
    String name = "동물";
    
    public void sound(){
        System.out.println("동물");
    }
}

class Cat extends Animal{
    String name = "고양이";

    public void sound(){
        System.out.println("고양이");
    }
}

public class test{
    public static void main(String[] args) {
        Animal test = new Cat();
        System.out.println(test);
        System.out.println(test.name);
        Cat test2 = new Cat();
        System.out.println(test2);
        System.out.println(test2.name);
    }
}