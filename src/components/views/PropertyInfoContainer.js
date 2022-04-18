
import ListInfoProperty from '../utilities/ListInfoProperty'
import ImgProperty from '../utilities/ImgProperty'
// import OptionProperty from '../utilities/OptionProperty';

export const PropertyInfoContainer = ({resProject}) => {

    return (
        <div className="containerPropertyView">
            
                <div className="InfoProperty">
                    <ImgProperty/>
                    <ListInfoProperty resProject={resProject}/>
                    {/* <h3>Options : </h3>
                    <ul className='mt-3'>
                        {resProject.option_project.map(option => (
                            <OptionProperty optionId={option.id_Option} key={option.id}/>
                        ))}
                    </ul> */}
                </div>
            
        </div>
    );
}
