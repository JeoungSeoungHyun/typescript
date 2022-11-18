{
    type PageInfo = {
        title: string;
    };
    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about : {title: 'About'},
        contact : {title: 'Contact'},
    }

    type Product = 'cat' | 'dog';
    type NewProduct = Capitalize<Product>; // 대문자로 만들어준다. 이와 같이 다양한 utility type이 존재 한번쯤 보는걸 추천
}