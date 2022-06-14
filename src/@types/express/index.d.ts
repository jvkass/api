// Sobrescrevendo o tipo do request do Express para pegar o id do User logado através do middleware


declare namespace Express {
    export interface Request {
        user: {
            id: string;
        }
    }
}

