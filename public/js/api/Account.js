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
        //options.data.id = id;
        return createRequest({
            url: this.URL,
            method: "GET",
            responseType: "json",
            data,
            callback: (err, response) => {
                callback(err, response);
            }
        })
    }
}

Account.URL = "/account";