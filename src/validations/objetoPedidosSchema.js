const yup = require('./yup');

const objetoPedidosSchema = yup.object().shape({
    número_item:
        yup
            .number("O campo deve ser do tipo Número.")
            .positive("O número deve ser positivo.")
            .integer("O número deve ser inteiro.")
            .required("O campo número_item é obrigatório. "),
    código_produto:
        yup
            .string()
            .required(),
    quantidade_produto:
        yup
            .number()
            .integer()
            .positive()
            .required(),
    valor_unitário_produto:
        yup
            .number()
            .positive()
            
})

module.exports = objetoPedidosSchema