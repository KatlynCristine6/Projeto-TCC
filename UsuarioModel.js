class Usuario
{
    #id
    #email
    #senha
    #username // Changed from #nome to #username

    constructor(email, senha, username) // Changed nome to username
    {
        this.#validarEmail(email);

        this.#email = email;
        this.#senha = senha;
        this.#username = username; // Changed nome to username
    }

    get id()
    {
        return this.#id;
    }

    get email()
    {
        return this.#email;
    }

    get senha()
    {
        return this.#senha;
    }

    get username() // Changed from nome to username
    {
        return this.#username;
    }

    set email(valor)
    {
        this.#email = valor;
    }

    set id(valor)
    {
        this.#id = valor;
    }

    #validarEmail(email)
    {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!pattern.test(email))
        {
            throw new Error("Email fora do padrão");
        }
    }
}

module.exports = Usuario;