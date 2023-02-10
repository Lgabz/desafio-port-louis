const yup = require('./yup');

const objetoNotasSchema = yup.object().shape({
    id_pedido:
        yup
            .string()
            .required("O campo id_pedido é obrigatório. "),
    número_item:
        yup
            .number("O campo deve ser do tipo Número.")
            .positive("O número deve ser positivo.")
            .integer("O número deve ser inteiro.")
            .required("O campo número_item é obrigatório. "),
    quantidade_produto:
        yup
            .number()
            .integer()
            .positive()
            .required()           
})

module.exports = objetoNotasSchema