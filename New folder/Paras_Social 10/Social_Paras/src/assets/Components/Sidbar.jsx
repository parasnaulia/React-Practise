function Sidebar({ value, setVal }) {
      function hand() {
        setVal("create");
      }
    
      function hand1() {
        setVal("Home");
      }
    
      return (
        <>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className={`nav-item `} onClick={hand1}>
              <a href="#" className={`nav-link ${value === "Home" ? "active" : ""} `}>
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                Home
              </a>
            </li>
            <li className={`nav-item ${value === "create" ? "active" : ""}`} onClick={hand}>
              <a href="#" className={`nav-link text-white ${value==="create"?"active":""}`}>
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                Create
              </a>
            </li>
          </ul>
        </>
      );
    }
    
    export default Sidebar;
    