/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    /**
     * Получает информацию о счёте
     * */
    static get(id = '', callback) {
        return createRequest({
            url: this.URL,
            method: "GET",
            responseType: "json",
            id,
            callback: (err, response) => {
                if (!response.sucess) {
                    return;
                }
                console.log(response);
                callback(err, response);
            }
        })
    }
}

Account.URL = "/account";