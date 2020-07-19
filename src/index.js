import imageReadTime from './utils/image-read-time';
import wordsReadTime from './utils/words-read-time';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';
import humanizeTime from './utils/humanize-time';


function readTime(
  string,
  customWordTime,
  customImageTime,
  chineseKoreanReadTime,
  imageTags,
  language
) {
  const { time: imageTime, count: imageCount } = imageReadTime(customImageTime, imageTags, string);
  const strippedString = stripTags(stripWhitespace(string));
  const {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  } = wordsReadTime(strippedString, customWordTime);
  return {
    humanizedDuration: humanizeTime(imageTime + wordTime, language),
    duration: imageTime + wordTime,
    totalWords: wordCount,
    wordTime,
    totalImages: imageCount,
    imageTime,
    otherLanguageTimeCharacters: characterCount,
    otherLanguageTime,
  };
}

export default readTime;
