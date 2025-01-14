/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
    /**
     * Устанавливает текущего пользователя в
     * локальном хранилище.
     * */
    static setCurrent(user) {
        localStorage.user = JSON.stringify(user);
    }

    /**
     * Удаляет информацию об авторизованном
     * пользователе из локального хранилища.
     * */
    static unsetCurrent() {
        localStorage.removeItem("user");
    }

    /**
     * Возвращает текущего авторизованного пользователя
     * из локального хранилища
     * */
    static current() {
        if (localStorage.user) {
            let existingUser = JSON.parse(localStorage.user);
            return existingUser;
        } else {
            return null;
        }
    }

    /**
     * Получает информацию о текущем
     * авторизованном пользователе.
     * */
    static fetch(callback) {
        return createRequest({
            url: this.URL + "/current",
            method: "GET",
            responseType: "json",
            callback: (err, response) => {
                if (response && response.user) {
                    this.setCurrent(response.user);
                } else {
                    this.unsetCurrent();
                }
                callback(err, response);
            }
        })
    }

    /**
     * Производит попытку авторизации.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static login(data, callback) {
        return createRequest({
            url: this.URL + "/login",
            method: "POST",
            responseType: "json",
            data,
            callback: (err, response) => {
                if (response.user && response) {
                    this.setCurrent(response.user);
                }
                callback(err, response);
                console.log(err, response);
            }
        });
    }

    /**
     * Производит попытку регистрации пользователя.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static register(data, callback) {
        return createRequest({
            url: this.URL + "/register",
            method: "POST",
            responseType: "json",
            data,
            callback: (err, response) => {
                if (response && response.success) {
                    this.setCurrent(response.user);
                }
                callback(err, response);
            }
        })
    }

    /**
     * Производит выход из приложения. После успешного
     * выхода необходимо вызвать метод User.unsetCurrent
     * */
    static logout(data, callback) {
        return createRequest({
            url: this.URL + "/logout",
            method: "POST",
            responseType: "json",
            data,
            callback: (err, response) => {
                if (response && response.success) {
                    this.unsetCurrent(response.user);
                }
                callback(err, response);
            }
        })
    }
}
User.URL = "/user";