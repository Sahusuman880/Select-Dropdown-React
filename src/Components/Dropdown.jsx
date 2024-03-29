import React from "react";
import CreatableSelect from "react-select/creatable";
import { components } from "react-select";

const Dropdown = () => {
  const options = [
    {
      value: "Suman Sahu",
      label: "Suman Sahu",
      email: "sahusuman880@gmail.com",
      color: "#FF8B00",
      logo: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      value: "Sunil Sahu",
      label: "Sunil Sahu",
      email: "Sunilsahu8888@gmail.com",
      color: "#32a8a2",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_SEpxJE_9PCTfFmp2RAx9rGL7BB56rJSh1sPSlMj4Q&s",
    },
    {
      value: "Lipsarani Swain",
      label: "Lipsarani Swain",
      email: "Lipsaraniswain157@gmail.com",
      color: "#324ca8",
      logo: "https://i.guim.co.uk/img/media/9b089d0d5d0939056d2be35001310adc0f355895/946_287_3140_1884/master/3140.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=51ec094b8672595d76d321e0ee6421f6",
    },
    {
      value: "Chinmaya Nimalpuri",
      label: "Chinmaya Nimalpuri",
      email: "chinmayanimalpuri123@gmail.com",
      color: "#7f32a8",
      logo: "https://i.dailymail.co.uk/i/pix/2016/08/05/14/36E80BDE00000578-3725482-image-a-74_1470405453388.jpg",
    },
    {
      value: "Amit Kumar Sahu",
      label: "Amit Kumar Sahu",
      email: "amitkumarsahu@gmail.com",
      color: "#a88b32",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_SEpxJE_9PCTfFmp2RAx9rGL7BB56rJSh1sPSlMj4Q&s",
    },
    {
      value: "Snehalata Majhi",
      label: "Snehalata Majhi",
      email: "snehalatamajhi@gmail.com",
      color: "#a84632",
      logo: "https://d187goyob322lh.cloudfront.net/Pictures/480xAny/0/6/4/7064_Church_failing.png",
    },
    {
      value: "Satya Narayan Dash",
      label: "Satya Narayan Dash",
      email: "satyanarayandash@gmail.com",
      color: "#a83298",
      logo: "https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg",
    },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: "1px solid black", // Single-line border
      borderTopWidth: "0px",
      borderRightWidth: "0px", // No border on the right
      borderBottomWidth: "5px",
      borderLeftWidth: "0px", // No border on the left
      borderRadius: "8px",
      backgroundColor: "white",
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        color: data.color,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "8px",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        paddingLeft: "8px",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  const OptionWithLogo = (props) => (
    <components.Option {...props}>
      <img
        src={props.data.logo}
        alt={props.label}
        style={{
          marginRight: "8px",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
        }}
      />
      <div>
        <div>{props.label}</div>
        <div style={{ fontSize: "0.8em", color: "#777" }}>
          {props.data.email}
        </div>
      </div>
    </components.Option>
  );

  const MultiValueWithLogo = (props) => (
    <components.MultiValue {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {
          <img
            src={props.data.logo}
            alt={props.label}
            style={{
              marginRight: "4px",
              borderRadius: "50%",
              height: "25px",
              width: "25px",
            }}
          />
        }
        {props.data.label}
      </div>
    </components.MultiValue>
  );

  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  return (
    <CreatableSelect
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
      placeholder={"Select Users..."}
      components={{
        Option: OptionWithLogo,
        MultiValue: MultiValueWithLogo,
      }}
    />
  );
};

export default Dropdown;
