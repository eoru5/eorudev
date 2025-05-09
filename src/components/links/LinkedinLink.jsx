import React from 'react';
import SVGLink from '../SVGLink';

const LinkedinLink = () => {
  return (
    <SVGLink
      to='https://www.linkedin.com/in/g-zhu/'
      viewBox='0 0 22 22'
      path={
        <path className="fill-white group-hover:fill-[url(#hover-gradient)]" d="M20 0H2C0.895 0 0 0.895 0 2V20C0 21.105 0.895 22 2 22H20C21.105 22 22 21.105 22 20V2C22 0.895 21.105 0 20 0ZM6.954 18H4.004V8.508H6.954V18ZM5.449 7.151C4.498 7.151 3.729 6.38 3.729 5.431C3.729 4.482 4.499 3.712 5.449 3.712C6.397 3.712 7.168 4.483 7.168 5.431C7.168 6.38 6.397 7.151 5.449 7.151ZM18.004 18H15.056V13.384C15.056 12.283 15.036 10.867 13.523 10.867C11.988 10.867 11.752 12.066 11.752 13.304V18H8.804V8.508H11.634V9.805H11.674C12.068 9.059 13.03 8.272 14.465 8.272C17.452 8.272 18.004 10.238 18.004 12.794V18Z" fill="white"/>
      }
    />
  )
}

export default LinkedinLink;
