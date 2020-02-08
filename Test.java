class Test{
int a,b;
public void getData(){
a=2;
b=4;
}
public void display(){
System.out.println("Sum= "a+b);
}
}
class Add{
public static void main(String args[]){
Test ob=new Test();
ob.getData();
ob.display();
}

}