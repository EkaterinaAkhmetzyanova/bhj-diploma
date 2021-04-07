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
            url: this.URL + "/" + id,
            method: "GET",
            responseType: "json",
            id,
            callback
        })
    }
}

Account.URL = "/account";