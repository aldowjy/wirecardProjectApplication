import variables from '../../themes/variables';

export default {
    containerStatus: {
      marginHorizontal: 50,
      marginVertical: 30,
    },

    viewStatus: {
      justifyContent: 'center'
    },

    iconColor: {
      color: variables.turquoiseColor
    },
    textStatus: {
      top: 3,
      color: variables.turquoiseColor,
      fontWeight: 'bold',
      marginHorizontal: 5,
    },
    badgeColor: {
      backgroundColor: variables.mediumOrangeColor
    },

    containerRecent: {
      marginHorizontal: 30
    },
    titleRecent: {
      justifyContent: 'center',
      backgroundColor: variables.lightOrangeColor,
      height: 40,
      paddingVertical: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    bodyRecent: {
      backgroundColor: variables.whiteColor,
      height: 500,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    textList: {
      fontWeight: 'bold'
    },
    iconList: {
      color: variables.mediumOrangeColor,
      fontSize: 30,
      padding: 10
    }
}