/* eslint-disable no-unused-vars */
import React from 'react';
import experiences from './experiences';

function Experience() {

  return (
    <div>
      {experiences.length > 0 ?
        (
          <section className="bg-mainBg p-4 md:p-8 space-y-8 font-mono">
            <h2 className="text-3xl font-bold text-accentColor mb-6 border-b border-accentColor pb-2">Experience</h2>
            <div className="grid gap-x-5 gap-y-12 md:gap-y-8 lg:gap-y-8 xl:gap-y-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex max-w-xs flex-col justify-between space-y-2 rounded-lg bg-articleBg p-4">
                  <h3 className="text-xl font-semibold text-accentColor">{exp.role}</h3>
                  <p className="text-sm font-medium text-textColor">{exp.company} &middot; {exp.duration}</p>
                  <p className="text-textColor">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )
        :
        <div className='items-center justify-center flex h-[500px] text-center'>
          <section className="bg-mainBg p-4 md:p-8 space-y-8 font-mono">
            <h2 className="text-3xl font-bold text-accentColor mb-6 border-accentColor pb-2">This page will be up shortly</h2>
          </section>
        </div>
      }

    </div>
  );
}

export default Experience;