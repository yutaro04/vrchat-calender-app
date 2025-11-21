"use client";

const svgPaths = {
  p171efc80: "M19.4462 0H1.24125C0.555727 0 0 0.555727 0 1.24125V9.1025C0 9.78802 0.555727 10.3438 1.24125 10.3438H19.4462C20.1318 10.3438 20.6875 9.78802 20.6875 9.1025V1.24125C20.6875 0.555727 20.1318 0 19.4462 0Z",
  p1754000: "M74.8887 149.364C116.02 149.364 149.364 116.02 149.364 74.8887C149.364 33.7573 116.02 0.41375 74.8887 0.41375C33.7573 0.41375 0.41375 33.7573 0.41375 74.8887C0.41375 116.02 33.7573 149.364 74.8887 149.364Z",
  p17d48680: "M3.72375 9.1025C5.78032 9.1025 7.4475 7.06484 7.4475 4.55125C7.4475 2.03766 5.78032 0 3.72375 0C1.66718 0 0 2.03766 0 4.55125C0 7.06484 1.66718 9.1025 3.72375 9.1025Z",
  p187e5900: "M77.28 154.08C119.695 154.08 154.08 119.695 154.08 77.28C154.08 34.8645 119.695 0.48 77.28 0.48C34.8645 0.48 0.48 34.8645 0.48 77.28C0.48 119.695 34.8645 154.08 77.28 154.08Z",
  p1d54d500: "M3.51687 6.82687C5.34494 6.82687 6.82687 5.34494 6.82687 3.51687C6.82687 1.68881 5.34494 0.206875 3.51687 0.206875C1.68881 0.206875 0.206875 1.68881 0.206875 3.51687C0.206875 5.34494 1.68881 6.82687 3.51687 6.82687Z",
  p1f411d80: "M0.0768314 0.192079L103.514 41.5671",
  p20568c80: "M1.92 3.84C2.98039 3.84 3.84 2.98039 3.84 1.92C3.84 0.859613 2.98039 0 1.92 0C0.859613 0 0 0.859613 0 1.92C0 2.98039 0.859613 3.84 1.92 3.84Z",
  p206e5f00: "M3.10312 7.4475C4.81693 7.4475 6.20625 5.78032 6.20625 3.72375C6.20625 1.66718 4.81693 0 3.10312 0C1.38932 0 0 1.66718 0 3.72375C0 5.78032 1.38932 7.4475 3.10312 7.4475Z",
  p2ae58f80: "M0.0925173 0.185035L165.593 82.935",
  p330a0e00: "M83.1637 165.914C128.865 165.914 165.914 128.865 165.914 83.1637C165.914 37.4622 128.865 0.41375 83.1637 0.41375C37.4622 0.41375 0.41375 37.4622 0.41375 83.1637C0.41375 128.865 37.4622 165.914 83.1637 165.914Z",
  p3a896b00: "M3.84 8.96C5.96077 8.96 7.68 6.95424 7.68 4.48C7.68 2.00576 5.96077 0 3.84 0C1.71923 0 0 2.00576 0 4.48C0 6.95424 1.71923 8.96 3.84 8.96Z",
  p3aceae00: "M91.2319 182.257C141.504 182.257 182.257 141.504 182.257 91.2319C182.257 40.9602 141.504 0.206875 91.2319 0.206875C40.9602 0.206875 0.206875 40.9602 0.206875 91.2319C0.206875 141.504 40.9602 182.257 91.2319 182.257Z",
  p3bf3db30: "M21.1012 0.482511L41.7887 12.895V37.72L21.1012 50.1325L0.41375 37.72V12.895L21.1012 0.482511Z",
  p3c45a300: "M82.9569 165.707C128.658 165.707 165.707 128.658 165.707 82.9569C165.707 37.2553 128.658 0.206875 82.9569 0.206875C37.2553 0.206875 0.206875 37.2553 0.206875 82.9569C0.206875 128.658 37.2553 165.707 82.9569 165.707Z",
  p3cebcca0: "M23.17 0H1.655C0.740969 0 0 0.740969 0 1.655V10.7575C0 11.6715 0.740969 12.4125 1.655 12.4125H23.17C24.084 12.4125 24.825 11.6715 24.825 10.7575V1.655C24.825 0.740969 24.084 0 23.17 0Z",
  p3d18bf80: "M23.68 0H1.92C0.859613 0 0 0.859613 0 1.92V10.88C0 11.9404 0.859613 12.8 1.92 12.8H23.68C24.7404 12.8 25.6 11.9404 25.6 10.88V1.92C25.6 0.859613 24.7404 0 23.68 0Z",
  p5ec3f40: "M1.86187 3.51687C2.77591 3.51687 3.51687 2.77591 3.51687 1.86187C3.51687 0.947844 2.77591 0.206875 1.86187 0.206875C0.947844 0.206875 0.206875 0.947844 0.206875 1.86187C0.206875 2.77591 0.947844 3.51687 1.86187 3.51687Z",
  p6c4e580: "M0.41375 33.5137V0.41375H33.5137",
  p72421a0: "M70.88 141.28C109.761 141.28 141.28 109.761 141.28 70.88C141.28 31.9992 109.761 0.48 70.88 0.48C31.9992 0.48 0.48 31.9992 0.48 70.88C0.48 109.761 31.9992 141.28 70.88 141.28Z",
};

function Group() {
  return (
    <div className="absolute contents inset-[-19.63%_-4.17%_-16.67%_-5.83%]" data-name="Group">
      <div className="absolute inset-[-16.67%_70.83%_57.41%_-4.17%] opacity-[0.08]" data-name="Vector">
        <div className="absolute inset-[-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167 167">
              <path d={svgPaths.p330a0e00} id="Vector" stroke="currentColor" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[-19.63%_69.17%_54.44%_-5.83%] opacity-[0.08]" data-name="Vector">
        <div className="absolute inset-[-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 183">
            <path d={svgPaths.p3aceae00} id="Vector" stroke="currentColor" strokeDasharray="4.14 4.14" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[60.37%_-2.5%_-13.7%_72.5%] opacity-[0.08]" data-name="Vector">
        <div className="absolute inset-[-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
            <path d={svgPaths.p1754000} id="Vector" stroke="currentColor" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[57.41%_-4.17%_-16.67%_70.83%] opacity-[0.08]" data-name="Vector">
        <div className="absolute inset-[-0.12%_-0.13%_-0.13%_-0.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 166">
            <path d={svgPaths.p3c45a300} id="Vector" stroke="currentColor" strokeDasharray="3.31 3.31" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.19%_20.83%_47.04%_70.83%] opacity-[0.08]" data-name="Vector">
        <div className="absolute inset-[-0.97%_-1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 51">
            <path d={svgPaths.p3bf3db30} id="Vector" stroke="currentColor" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] opacity-[0.08] right-3/4 top-1/2" data-name="Vector">
        <div className="absolute bottom-[-0.21px] left-0 right-0 top-[-0.21px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
            <path d="M0 0.206875H82.75" id="Vector" stroke="currentColor" strokeDasharray="2.07 2.07" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.63%] left-3/4 opacity-[0.08] right-[8.33%] top-[20.37%]" data-name="Vector">
        <div className="absolute bottom-[-0.21px] left-0 right-0 top-[-0.21px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
            <path d="M0 0.206875H82.75" id="Vector" stroke="currentColor" strokeDasharray="2.07 2.07" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[64.81%] left-1/2 opacity-[0.08] right-1/2 top-[5.56%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.21px] right-[-0.21px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 83">
            <path d="M0.206875 0V82.75" id="Vector" stroke="currentColor" strokeDasharray="2.07 2.07" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[79.63%_78.33%_15.93%_16.67%]" data-name="Group">
      <div className="absolute inset-[79.63%_78.33%_15.93%_16.67%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
          <path d={svgPaths.p3cebcca0} fill="currentColor" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.22%_81.08%_16.52%_17.42%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <path d={svgPaths.p17d48680} fill="currentColor" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.22%_79.08%_16.52%_19.42%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <path d={svgPaths.p17d48680} fill="currentColor" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[5.56%_29.17%_90.74%_66.67%]" data-name="Group">
      <div className="absolute inset-[5.56%_29.17%_90.74%_66.67%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 11">
          <path d={svgPaths.p171efc80} fill="currentColor" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.07%_31.46%_91.26%_67.29%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
          <path d={svgPaths.p206e5f00} fill="currentColor" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.07%_29.79%_91.26%_68.96%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
          <path d={svgPaths.p206e5f00} fill="currentColor" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[87.04%_58.33%_9.26%_37.5%]" data-name="Group">
      <div className="absolute inset-[87.04%_58.33%_9.26%_37.5%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 11">
          <path d={svgPaths.p171efc80} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[87.56%_60.62%_9.78%_38.13%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
          <path d={svgPaths.p206e5f00} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[87.56%_58.96%_9.78%_39.79%] opacity-[0.06]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
          <path d={svgPaths.p206e5f00} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[5.56%_29.17%_9.26%_16.67%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[26.59%_20.17%_26.59%_24.33%]" data-name="Group">
      <div className="absolute inset-[27.19%_74.67%_71.63%_24.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p5ec3f40} fill="currentColor" id="Vector" opacity="0.2" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[26.59%_74.33%_71.04%_24.33%]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-3.12%_-3.12%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p1d54d500} id="Vector" opacity="0.1" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.81%_41.33%_42%_58%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p5ec3f40} fill="currentColor" id="Vector" opacity="0.2" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.22%_41%_41.41%_57.67%]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-3.12%_-3.12%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p1d54d500} id="Vector" opacity="0.1" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[71.63%_20.5%_27.19%_78.83%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p5ec3f40} fill="currentColor" id="Vector" opacity="0.2" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[71.04%_20.17%_26.59%_78.5%]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-3.12%_-3.12%_-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p1d54d500} id="Vector" opacity="0.1" stroke="currentColor" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[42.59%] left-1/4 right-[41.67%] top-[27.78%]" data-name="Vector">
        <div className="absolute inset-[-0.22%_-0.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 84">
            <path d={svgPaths.p2ae58f80} id="Vector" opacity="0.1" stroke="black" strokeDasharray="2.07 4.14" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[57.41%_20.83%_27.78%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.46%_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 42">
            <path d={svgPaths.p1f411d80} id="Vector" opacity="0.1" stroke="black" strokeDasharray="2.07 4.14" strokeWidth="0.41375" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[-9.26%] contents left-0 right-0 top-[-9.26%]" data-name="Group">
      <div className="absolute bottom-[97.41%] left-0 opacity-[0.15] right-[93.33%] top-[-9.26%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-1.25%] right-0 top-[-1.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
            <path d={svgPaths.p6c4e580} id="Vector" stroke="black" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[97.41%] left-[93.33%] opacity-[0.15] right-0 top-[-9.26%]" data-name="Vector">
        <div className="absolute bottom-0 left-0 right-[-1.25%] top-[-1.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
            <path d="M0 0.41375H33.1V33.5137" id="Vector" stroke="black" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-9.26%] left-0 opacity-[0.15] right-[93.33%] top-[97.41%]" data-name="Vector">
        <div className="absolute bottom-[-1.25%] left-[-1.25%] right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
            <path d="M33.5137 33.1H0.41375V0" id="Vector" stroke="black" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-9.26%] left-[93.33%] opacity-[0.15] right-0 top-[97.41%]" data-name="Vector">
        <div className="absolute bottom-[-1.25%] left-0 right-[-1.25%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
            <path d="M33.1 0V33.1H0" id="Vector" stroke="black" strokeWidth="0.8275" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[33.41%_8.43%_5.18%_4.17%] leading-[normal] not-italic text-[4.965px] text-black text-nowrap whitespace-pre" data-name="Group">
      <p className="absolute inset-[63.04%_72.27%_34.81%_4.17%] opacity-[0.04]">01001000 01000101 01001100 01001100 01001111</p>
      <p className="absolute inset-[33.41%_8.43%_64.44%_58.33%] opacity-[0.04]">01010110 01001001 01010010 01010100 01010101 01000001 01001100</p>
      <p className="absolute inset-[92.67%_59.77%_5.18%_16.67%] opacity-[0.04]">01000101 01010110 01000101 01001110 01010100</p>
    </div>
  );
}

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute bottom-[-9.26%] left-0 right-0 top-[-9.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group />
      <Group4 />
      <Group5 />
      <div className="absolute bottom-[-9.26%] left-0 right-0 top-[-9.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group6 />
      <div className="absolute bottom-[-9.26%] left-0 right-0 top-[-9.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 497 331">
          <path d="M496.5 0H0V331H496.5V0Z" fill="url(#paint0_radial_bg_pattern)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(24825 16550) scale(24825 16550)" gradientUnits="userSpaceOnUse" id="paint0_radial_bg_pattern" r="1">
              <stop stopOpacity="0" />
              <stop offset="1" stopOpacity="0.05" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Group7 />
    </div>
  );
}
