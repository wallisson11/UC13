// Importando o Joi (Validação)
import Joi from "joi";

// Validação para inclusão do carro (Modelo)
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required().messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
        'any.required': 'O nome do carro é obrigatório.',
    }), // Nome do carro, mínimo de 3 caracteres
    sigla: Joi.string().length(3).required().messages({
        'string.length': 'A sigla deve ter exatamente 3 caracteres.',
        'any.required': 'A sigla é obrigatória.',
    }), // Sigla do carro, exatamente 3 caracteres
    potencia: Joi.number().min(1).required().messages({
        'number.min': 'A potência deve ser maior ou igual a 1.',
        'any.required': 'A potência é obrigatória.',
    }), // Potência mínima de 1 CV
    velocidadeMaxima: Joi.number().min(1).required().messages({
        'number.min': 'A velocidade máxima deve ser maior ou igual a 1.',
        'any.required': 'A velocidade máxima é obrigatória.',
    }), // Velocidade mínima de 1
    consumo: Joi.number().min(0.1).required().messages({
        'number.min': 'O consumo deve ser maior ou igual a 0.1.',
        'any.required': 'O consumo é obrigatório.',
    }), // Consumo mínimo de 0.1
    aceleracao: Joi.number().min(0).required().messages({
        'number.min': 'A aceleração mínima é 0.',
        'any.required': 'A aceleração é obrigatória.',
    }), // Aceleração mínima de 0
    preco: Joi.number().min(0).required().messages({
        'number.min': 'O preço deve ser maior ou igual a 0.',
        'any.required': 'O preço é obrigatório.',
    }), // Preço mínimo de 0
});

// Validação para atualização do carro
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3), // Nome do carro, opcional (mínimo de 3 caracteres)
    sigla: Joi.string().length(3), // Sigla do carro, opcional (exatamente 3 caracteres)
    potencia: Joi.number().min(1), // Potência, opcional (mínimo de 1 CV)
    velocidadeMaxima: Joi.number().min(1), // Velocidade máxima, opcional (mínimo de 1)
    consumo: Joi.number().min(0.1), // Consumo, opcional (mínimo de 0.1)
    aceleracao: Joi.number().min(0), // Aceleração, opcional (mínimo de 0)
    preco: Joi.number().min(0), // Preço, opcional (mínimo de 0)
    // ano: Joi.number().integer().min(1886).max(new Date().getFullYear()), // Caso queira adicionar o campo 'ano'
}).min(1); // Pelo menos um campo precisa ser atualizado
