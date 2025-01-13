import React from 'react';
import ResumeLink from './ResumeLink';
import GithubLink from './GithubLink';
import LinkedinLink from './LinkedinLink';

const Links = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <ResumeLink />
      <LinkedinLink />
      <GithubLink />
    </div>
  )
}

export default Links;