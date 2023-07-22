import React from "react";

const ButtonUni = React.memo((props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 399 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="399" height="84" rx="42" fill="#E73745" />
    <path
      d="M77.8 26.96C77.6933 27.2533 77.56 27.5867 77.4 27.96C77.24 28.3067 77.08 28.7067 76.92 29.16C75.4533 32.7867 74.0933 36.0533 72.84 38.96C71.6133 41.84 70.1467 45.12 68.44 48.8C66.9467 52 64.76 54.56 61.88 56.48C59.0267 58.4267 55.4267 59.36 51.08 59.28C50.52 56.96 50.0667 55.2133 49.72 54.04C49.4 52.84 48.96 51.6133 48.4 50.36C49.9733 50.7067 51.4267 50.88 52.76 50.88C54.0667 50.88 55.24 50.7067 56.28 50.36C54.36 45.4267 50.9333 37.6267 46 26.96H55.96L62.32 41.92L63.44 39.24C66.2133 32.6533 67.7733 28.56 68.12 26.96H77.8ZM105.105 34.16C104.971 38.2133 104.905 41.8533 104.905 45.08C104.905 48.3067 104.971 51.9467 105.105 56H96.4247V48.72H88.5847V56H79.9047C80.038 52.96 80.1047 49.32 80.1047 45.08C80.1047 40.84 80.038 37.2 79.9047 34.16H88.5847V41.44H96.4247V34.16H105.105ZM133.343 34.16C133.21 38.0267 133.143 41.52 133.143 44.64C133.143 47.7067 133.21 51.2 133.343 55.12H125.143L125.583 41.28L119.463 55.12H108.303C108.463 51.6 108.543 48.1067 108.543 44.64C108.543 41.12 108.463 37.6267 108.303 34.16H116.183L115.783 48.36L121.903 34.16H133.343ZM154.185 45.16C158.745 45.16 161.025 46.6133 161.025 49.52C161.025 51.6 160.225 53.2 158.625 54.32C157.052 55.44 154.199 56 150.065 56H136.545C136.679 52.96 136.745 49.32 136.745 45.08C136.745 40.84 136.679 37.2 136.545 34.16H144.825V34.2H150.025C152.532 34.2 154.492 34.4133 155.905 34.84C157.345 35.24 158.359 35.8267 158.945 36.6C159.532 37.3733 159.825 38.36 159.825 39.56C159.825 42.2533 157.945 44.12 154.185 45.16ZM144.825 39.68V42.48H147.865C149.092 42.48 149.959 42.3733 150.465 42.16C150.972 41.92 151.225 41.5067 151.225 40.92C151.225 40.4667 150.959 40.1467 150.425 39.96C149.919 39.7733 149.065 39.68 147.865 39.68H144.825ZM147.865 50.48C149.385 50.48 150.425 50.3733 150.985 50.16C151.545 49.92 151.825 49.5067 151.825 48.92C151.825 48.4133 151.532 48.04 150.945 47.8C150.359 47.56 149.332 47.44 147.865 47.44H144.825V50.48H147.865ZM184.971 46H171.931C172.144 47.1733 172.664 48.1333 173.491 48.88C174.344 49.6 175.544 49.96 177.091 49.96C178.211 49.96 179.264 49.7467 180.251 49.32C181.238 48.8667 182.024 48.24 182.611 47.44C184.398 48.32 186.771 49.2667 189.731 50.28C188.904 52.1467 187.398 53.64 185.211 54.76C183.051 55.8533 180.224 56.4 176.731 56.4C172.198 56.4 168.838 55.36 166.651 53.28C164.491 51.1733 163.411 48.4133 163.411 45C163.411 41.6667 164.491 38.96 166.651 36.88C168.811 34.8 172.171 33.76 176.731 33.76C179.451 33.76 181.811 34.2133 183.811 35.12C185.811 36.0267 187.344 37.2933 188.411 38.92C189.478 40.52 190.011 42.36 190.011 44.44C190.011 45.1333 189.984 45.6533 189.931 46H184.971ZM177.291 39.8C175.958 39.8 174.864 40.0533 174.011 40.56C173.158 41.0667 172.558 41.76 172.211 42.64H181.651C181.331 41.7867 180.811 41.1067 180.091 40.6C179.371 40.0667 178.438 39.8 177.291 39.8ZM210.275 33.76C212.009 33.76 213.569 34.2533 214.955 35.24C216.342 36.2267 217.422 37.5733 218.195 39.28C218.969 40.96 219.355 42.8133 219.355 44.84C219.355 46.84 218.969 48.7333 218.195 50.52C217.422 52.28 216.329 53.7067 214.915 54.8C213.529 55.8667 211.942 56.4 210.155 56.4C208.075 56.4 206.289 55.9733 204.795 55.12C203.329 54.24 202.235 52.8933 201.515 51.08C201.515 52.6 201.569 55.04 201.675 58.4C201.782 61.6533 201.835 63.9467 201.835 65.28H192.795C192.955 60.32 193.035 55.1333 193.035 49.72C193.035 44.3067 192.955 39.12 192.795 34.16H200.475L201.635 39.16C202.382 37.2933 203.502 35.9333 204.995 35.08C206.489 34.2 208.249 33.76 210.275 33.76ZM205.995 49.2C207.195 49.2 208.195 48.8267 208.995 48.08C209.822 47.3067 210.235 46.3067 210.235 45.08C210.235 43.72 209.862 42.6133 209.115 41.76C208.369 40.9067 207.355 40.48 206.075 40.48C204.609 40.48 203.502 40.84 202.755 41.56C202.009 42.2533 201.635 43.4267 201.635 45.08C201.635 46.0133 201.875 46.8 202.355 47.44C202.835 48.0533 203.409 48.5067 204.075 48.8C204.742 49.0667 205.382 49.2 205.995 49.2ZM230.29 45.08C230.344 46.44 230.77 47.5333 231.57 48.36C232.397 49.1867 233.61 49.6 235.21 49.6C236.09 49.6 236.877 49.44 237.57 49.12C238.264 48.7733 238.904 48.2667 239.49 47.6C241.757 48.48 244.41 49.24 247.45 49.88C246.57 51.9333 245.077 53.5333 242.97 54.68C240.89 55.8267 238.184 56.4 234.85 56.4C230.397 56.4 227.104 55.36 224.97 53.28C222.837 51.2 221.77 48.4667 221.77 45.08C221.77 41.6933 222.837 38.96 224.97 36.88C227.104 34.8 230.397 33.76 234.85 33.76C238.184 33.76 240.89 34.3333 242.97 35.48C245.077 36.6267 246.57 38.2267 247.45 40.28C245.077 40.7867 242.424 41.5467 239.49 42.56C238.904 41.8933 238.264 41.4 237.57 41.08C236.877 40.7333 236.09 40.56 235.21 40.56C233.61 40.56 232.397 40.9733 231.57 41.8C230.77 42.6267 230.344 43.72 230.29 45.08ZM275.492 34.16C275.358 38.0267 275.292 41.52 275.292 44.64C275.292 47.7067 275.358 51.2 275.492 55.12H267.292L267.732 41.28L261.612 55.12H250.452C250.612 51.6 250.692 48.1067 250.692 44.64C250.692 41.12 250.612 37.6267 250.452 34.16H258.332L257.932 48.36L264.052 34.16H275.492ZM302.974 41.68C298.974 41.5733 296.067 41.5067 294.254 41.48V56H285.774V41.48C283.987 41.5067 281.094 41.5733 277.094 41.68V34.16H302.974V41.68ZM323.76 46H310.72C310.933 47.1733 311.453 48.1333 312.28 48.88C313.133 49.6 314.333 49.96 315.88 49.96C317 49.96 318.053 49.7467 319.04 49.32C320.027 48.8667 320.813 48.24 321.4 47.44C323.187 48.32 325.56 49.2667 328.52 50.28C327.693 52.1467 326.187 53.64 324 54.76C321.84 55.8533 319.013 56.4 315.52 56.4C310.987 56.4 307.627 55.36 305.44 53.28C303.28 51.1733 302.2 48.4133 302.2 45C302.2 41.6667 303.28 38.96 305.44 36.88C307.6 34.8 310.96 33.76 315.52 33.76C318.24 33.76 320.6 34.2133 322.6 35.12C324.6 36.0267 326.133 37.2933 327.2 38.92C328.267 40.52 328.8 42.36 328.8 44.44C328.8 45.1333 328.773 45.6533 328.72 46H323.76ZM316.08 39.8C314.747 39.8 313.653 40.0533 312.8 40.56C311.947 41.0667 311.347 41.76 311 42.64H320.44C320.12 41.7867 319.6 41.1067 318.88 40.6C318.16 40.0667 317.227 39.8 316.08 39.8ZM355.864 41.68C351.864 41.5733 348.958 41.5067 347.144 41.48V56H338.664V41.48C336.878 41.5067 333.984 41.5733 329.984 41.68V34.16H355.864V41.68Z"
      fill="#ADF7B6"
    />
  </svg>
));

export default ButtonUni;
