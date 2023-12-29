interface Element {
  accept(visitor: Visitor_): void;
}

class Cart implements Element {
  cart: Element[] = [];

  constructor() {
    this.cart.push(new Snack());
    this.cart.push(new Vegetable());
  }

  accept(visitor: Visitor_): void {
    console.log("Cart 준비 완료");
    visitor.visit(this);

    // cart에 customer에 accept된 물건들 읽기
    this.cart.forEach((item) => item.accept(visitor));
  }
}

// 방문자가 방문한 공간을 표현하는 물건 인터페이스
class Snack implements Element {
  accept(visitor: Visitor_): void {
    console.log("Snack 준비 완료");
    visitor.visit(this);
  }
}

class Vegetable implements Element {
  accept(visitor: Visitor_): void {
    console.log("Vegetable 준비 완료");
    visitor.visit(this);
  }
}

// 방문자 표현 인터페이스
interface Visitor_ {
  visit(cart: Cart): void;
  visit(snack: Snack): void;
  visit(vegetable: Vegetable): void;
}

// 방문자 구현
class Customer implements Visitor_ {
  visit(element: Element): void {
    if (element instanceof Cart) {
      console.log("Cart 구매 완료");
    } else if (element instanceof Snack) {
      console.log("Snack 구매 완료");
    } else if (element instanceof Vegetable) {
      console.log("Vegetable 구매 완료");
    }
  }
}

export default function Visitor() {
  const customer = new Customer();
  const cart = new Cart();
  cart.accept(customer);

  return (
    <div>
      <div>
        <div>🛒 담은 물건 {cart.cart.length}</div>
      </div>
    </div>
  );
}
//
