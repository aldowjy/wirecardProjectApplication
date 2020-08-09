import variables from '../../themes/variables';
import commons from '../../themes/commons';

export const styles = {
    viewModalBody: {
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#f7931d',
    },
    buttonView: {
        justifyContent: 'space-around',
        marginVertical: 15
    },

    buttonGeneral: {
        ...commons.button,
        backgroundColor: variables.orangeColor
    },
    buttonConfirm: {
        ...commons.button,
        backgroundColor: variables.turquoiseColor
    },

    titleForm: {
        justifyContent: 'center',
        backgroundColor: variables.lightOrangeColor,
        height: 40,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    bodyForm: {
        backgroundColor: variables.whiteColor,
        height: 500,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
}