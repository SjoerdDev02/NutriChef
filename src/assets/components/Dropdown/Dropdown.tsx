import styles from './Dropdown.module.css';
import { useState } from "react";

type DropdownProps = {
    filter: string,
    activeValue: string | undefined,
    values: string[],
    options: string[],
    updateFunction: (option: string) => void,
};

const Dropdown: React.FC<DropdownProps> = (props) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, option: string) => {
        if (event.key === "Enter") {
          props.updateFunction(option);
          setShowDropdown(false);
        }
    };

    const title = props.activeValue !== undefined ? 
    props.options[props.values.indexOf(props.activeValue)] || props.filter : 
    props.filter;

    return (
        <div className={styles.dropdown}>
            <div>
                <button className={styles.dropdownBtn} onClick={toggleDropdown}><h3>{title}</h3></button>
            </div>
            {showDropdown && (
                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdownOptionsContainer}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                      {props.options.map((option, index) => (
                          <div 
                              role='button'
                              tabIndex={0}
                              className={`${styles.dropdownOption} ${props.activeValue === props.values[index] && styles.activeValue}`}
                              key={index}
                              onClick={() => {
                                  props.updateFunction(props.values[index]);
                                  setShowDropdown(false);
                              }}
                              onKeyDown={(e) => handleKeyDown(e, props.values[index])}
                          >
                              {option}
                          </div>
                      ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;