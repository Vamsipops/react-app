
function Header({onNavigate}){

    return(
        <nav>
            <button onClick={() => onNavigate('stage1') }> Stage 1</button>
            <button onClick={() => onNavigate('stage2') }> Stage 2</button>
        </nav>

    );


}

export default Header