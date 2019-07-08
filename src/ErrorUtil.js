import React from 'react';

export default class ErrorUtil {
    static fieldError(error) {
        if (error && error.message) {
            return (
                <p className="help is-danger">
                    {error.message}
                </p>
            );
        } else if (error){
            return (
                <p className="help is-danger">
                    Erro desconhecido, contatar a NASA
                </p>
            )
        } else {
            return '';
        }
    }
}