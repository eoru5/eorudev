import React from 'react';
import ResumeLink from './links/ResumeLink';
import GithubLink from './links/GithubLink';
import LinkedinLink from './links/LinkedinLink';

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