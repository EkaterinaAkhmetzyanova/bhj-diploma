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
        console.log(id);
        return createRequest({
            url: this.URL + "/" + id,
            method: "GET",
            responseType: "json",
            id,
            callback
        })
    }
}

Account.URL = "/account";