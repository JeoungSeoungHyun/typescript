{
    class NetworkClient {
        tryConnect (): void {
            throw new Error('no network!');
        }
    }

    class userService {
        constructor(private client: NetworkClient) {}
        // login에서 에러 처리를 해봤자 무의미하다.
        login () {
            this.client.tryConnect();
            // login ....
        }
    }

    class App {
        constructor(private userService: userService) {}
        // 에러 처리는 유의미하게 catch를 처리 할 수 있는 곳에서 하는 것이 좋다. 에러 처리를 하더라도 아무런 의미가 없다면 안하는 것과 같다
        run() {
            try {
                this.userService.login();
            } catch(error) {
                // show dialog to user
            }
        };
    }

    const client = new NetworkClient();
    const service = new userService(client);
    // service.login();

    const app = new App(service);
    app.run();

    
}