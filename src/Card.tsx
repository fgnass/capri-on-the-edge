export function Card() {
  return (
    <svg className="card" viewBox="0 50 840 440">
      <defs>
        <linearGradient
          id="gradient-1"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={275}
          x2={420}
          y2={167}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-2"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={325}
          x2={420}
          y2={117.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={1}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-3"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={382}
          x2={420}
          y2={60.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.16,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-4"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={488.788}
          x2={420}
          y2={-46.967}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.089}
            style={{
              stopOpacity: 0.1,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.27,
            }}
          />
          <stop
            offset={0.896}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-5"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={610}
          x2={420}
          y2={-168.179}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.172}
            style={{
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.21,
            }}
          />
          <stop
            offset={0.771}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-vercel"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.5}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: "var(--g1)",
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "var(--g2)",
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "var(--g1)",
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-react"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.1}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: "var(--capri)",
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#BBF0FF",
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "var(--capri)",
            }}
          />
        </linearGradient>
        <symbol id="capri-logo" viewBox="0 0 145 128">
          <path
            d="m120.683 23.779 13.305 28.832-1.094 36.543s-7.297 23.962-7.657 24.219c-.361.245-1.575-.306-4.496-5.635-2.921-5.329-10.338-15.987-10.94-18.584-.613-2.597-.853-21.303-.853-21.303l-1.707-40.268 13.442-3.804Z"
            fill="#028F82"
          />
          <path
            d="M120.825 23.614s23.97 23.484 23.983 46.099c0 15.741-7.538 24.402-9.365 27.502-1.827 3.099-6.083 9.788-7.057 11.148-.973 1.359-2.151 3.932-2.993 4.924-.853.993.084-6.541 1.058-9.628.974-3.1 3.63-19.92 3.642-30.97.012-12.103-.997-26.767-5.145-35.648-4.58-9.8-8.883-14.431-8.883-14.431l4.76 1.004Z"
            fill="#2EC48E"
          />
          <path
            d="M128.034.177c-2.417-1.188-3.246 3.957-3.27 4.876-.023.872-2.387 3.346-4.838 5.912l-.391.41c-3.598 3.76-5.271 5.32-6.864 6.805-.461.43-1.011.887-1.503 1.356 1.967 2.134 2.062 4.203 2.062 4.203s2.697 0 4.283 2.91c1.614-1.562 3.584-3.7 5.664-5.91.589-.627 1.131-1.203 1.587-1.684l.599-.628c2.857-2.991 5.462-5.718 7.058-9.773 1.359-3.454-.216-6.443-4.387-8.477Z"
            fill="#028F82"
          />
          <path
            d="M92.045 109.945c-10.705 9.154-23.15 15.039-35.99 17.021-11.677 1.801-23.03.124-32.308-4.722-7.246 2.615-14.885.972-19.313-4.406a12.813 12.813 0 0 1-.461-.595l109.413-93.626c3.172.323 4.283 2.91 4.283 2.91 1.586 1.926 2.559 10.339-1.772 17.349 2.971 10.104 2.575 21.7-1.185 33.004-4.151 12.505-11.992 23.937-22.667 33.065Z"
            fill="#FFDB2D"
          />
          <path
            d="M113.386 23.617c-1.269-7.76-10.372-7.704-17.43-5.07C76.012 7.167 47.85 11.711 26.32 30.122 15.305 39.541 7.345 51.355 3.3 64.288-.398 76.1-.426 88.07 3.168 98.351c-3.329 6.46-3.076 13.687.804 18.892l109.413-93.626Z"
            fill="#FFE671"
          />
          <path
            d="M13.417 79.154c-2.286-19.471 10.15-30.953 10.68-31.433l7.115 8.179.03-.027c-.36.335-8.777 8.342-7.175 21.983l-10.65 1.298Z"
            fill="#FFF6C4"
          />
        </symbol>
        <linearGradient id="#mask-gradient">
          <stop offset="0" stop-color="black" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <mask id="mask">
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="url(#mask-gradient)"
          />
        </mask>
      </defs>
      <g className="orbits" transform="translate(420, 220)">
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-1)",
              animationDelay: 0,
            }}
            r={53.4}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-2)",
              animationDelay: "0.03s",
            }}
            r={103.4}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: "0.9s",
            }}
            cx={-69.6}
            cy={-76}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-3)",
              animationDelay: "0.06s",
            }}
            r={160.4}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.8s",
            }}
            cx={102.4}
            cy={-123}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-4)",
              animationDelay: "0.09s",
            }}
            r={267.3}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.6s",
            }}
            cx={-243.6}
            cy={111.4}
            r={5.8}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: "1s",
            }}
            cx={250}
            cy={94.4}
            r={5.8}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.7s",
            }}
            cx={-236.6}
            cy={-123.6}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-5)",
              animationDelay: "0.12s",
            }}
            r={388.5}
          />
        </g>
      </g>
      <path
        id="vercel-logo"
        d="m336.4 261-46.2-80-46.2 80h92.4z"
        style={{
          fill: "url(#gradient-vercel)",
        }}
      />
      <g id="center">
        <path
          d="M420 202 v36 M 402 220h36"
          style={{
            strokeWidth: 3.5625,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#999",
            fill: "none",
          }}
        />
      </g>
      <use href="#capri-logo" width={98} x={500} />
      <use href="#capri-logo" width={98} x={500} mask="url(#mask)" />
    </svg>
  );
}
