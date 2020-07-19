/**
 *  String#humanizeTime() -> String
 *
 *  Convert time(in minutes) to a humanized string.
 *
 * */

function humanizeTime(time, language) {
  language = (typeof language !== 'undefined') ?  language : 'ko';
  if (time < 0.5) {
    return language === 'ko' ? '1분 미만' : 'Less than a minute';
  } if (time >= 0.5 && time < 1.5) {
    return language === 'ko' ? '1분' : '1 minute';
  }
  return language === 'ko' ? `${Math.ceil(time)} 분` : `${Math.ceil(time)} minutes`;
}


export default humanizeTime;
