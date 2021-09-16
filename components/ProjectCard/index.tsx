import React, { useState } from 'react';

import AnimationContainer from 'components/AnimationContainer';
import { Project } from 'res/types';
import classes from './index.module.scss';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="my-2">
      <AnimationContainer type="fade">
        <div
          className={`group h-56 hover:h-screen-50 w-full bg-center bg-cover shadow-md hover:shadow-xl transition-all cursor-pointer flex items-end relative ${classes.container}`}
        >
          <div className="w-full bg-black bg-opacity-50 p-2 flex flex-col justify-center">
            <h4 className="text-lg text-white">{project.title}</h4>
            <h4 className="text-white italic font-serif">
              {project.tech.map((_tech, i) => (
                <React.Fragment key={i}>{`${_tech}${
                  i !== _tech.length - 1 ? ', ' : ''
                }`}</React.Fragment>
              ))}
            </h4>
            <p className={`text-white font-serif w-3/4 ${classes.description}`}>
              | &nbsp; {project.description}
            </p>
          </div>
          <div
            className={`absolute h-full w-full inset-0 bg-center bg-cover filter ${classes.background}`}
            style={{
              zIndex: -1,
              backgroundImage: `url(${project.image_path})`,
            }}
          />
        </div>
      </AnimationContainer>
    </div>
  );
}

//
// export default class Project extends Component {
//   state = {
//       isVisible: false,
//       info: info,
//       infoBanner: infoBanner,
//       infoContainer: infoContainer,
//       infoContent: `${infoContent} ${infoContent}__truncated`,
//       icon: `${icon} ${icon}__flipped`
//   }

//   clickHandler = () => {
//       if (!this.state.isVisible) {
//           this.setState({
//               isVisible: true,
//               info: `${info} ${info}__large`,
//               infoBanner: `${this.state.infoBanner} ${this.state.infoBanner}__large`,
//               infoContainer: `${this.state.infoContainer} ${this.state.infoContainer}__large`,
//               infoContent: infoContent,
//               icon: icon
//           })
//       } else {
//           this.setState({
//               isVisible: false,
//               info: info,
//               infoBanner: infoBanner,
//               infoContainer: infoContainer,
//               infoContent: `${infoContent} ${infoContent}__truncated`,
//               icon: `${icon} ${icon}__flipped`
//           })
//       }
//   }

//   render () {
//       return (
//           // <AnimationContainer project>
//           <div className="project" style={{backgroundImage: `url(${this.props.image})`}}>
//               <div className={this.state.infoBanner}></div>
//               <div className={this.state.info}>
//                   <div className={this.state.infoContainer}>
//                       <h3 className="project--info__title">{this.props.title}</h3>
//                           <p className={this.state.infoContent}>
//                               <em>
//                                   {this.props.stack}
//                               </em>
//                           </p>
//                           {
//                               this.state.isVisible &&
//                                   <p className="project--info__content project--info__content__description">
//                                       | &nbsp; {this.props.description}
//                                   </p>
//                           }
//                   </div>
//                   <div className="project--info__icons">
//                       <button style={{padding: '0'}} onClick={this.clickHandler}>
//                           <ExpandMoreIcon style={{fontSize: '35px'}} className={this.state.icon}/>
//                       </button>
//                       <a href={this.props.github} target="_blank" rel="noopener noreferrer">
//                           <GitHubIcon style={{fontSize: '32px'}} className='project--info__icon'/>
//                       </a>
//                       <a href={this.props.web} target="_blank" rel="noopener noreferrer">
//                           <LanguageIcon style={{fontSize: '35px'}} className='project--info__icon'/>
//                       </a>
//                   </div>
//               </div>
//           </div>
//           // </AnimationContainer>
//       )
//   }
// }
