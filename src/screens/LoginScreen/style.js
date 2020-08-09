import variables from '../../themes/variables';
import commons from '../../themes/commons';

export const styles = {
  containerView: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  headerView: {
    height: 62,
    justifyContent: 'flex-start'
  },
  headerImageView: {
    width: '90%',
    height: 80,
    top: -11,
    left: -12
  },

  contentView: {
    backgroundColor: variables.turquoiseColor,
    borderRadius: 20,
    marginHorizontal: 30
  },
  contentHeaderView: {
    alignItems: 'center',
    marginVertical: 15
  },
  contentHeaderWelcomeView: {
    color: variables.whiteColor,
    fontSize: 15,
    letterSpacing: 10,
    fontFamily: variables.generalFont
  },
  contentHeaderNameView: {
    color: variables.whiteColor,
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: variables.generalFont
  },
  contentHeaderLongView: {
    color: variables.whiteColor,
    fontFamily: variables.generalFont
  },

  contentBodyView: {
    backgroundColor: variables.whiteColor,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 30,
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

  forgotView: {
    marginVertical: 10,
    marginHorizontal: 15
  },
  viewForgotIcon: {
    color: variables.lightOrangeColor
  },
  viewText: {
    marginLeft: 15,
    paddingRight: 50
  },
  viewForgotTextLink: {
    color: variables.orangeColor
  },
  viewForgotText: {
    fontSize: 12
  },

  footerView: {
    justifyContent: 'space-around'
  }
};