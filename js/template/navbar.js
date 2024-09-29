const navbarTemplate = 
`
<div class="navbar">
    <a href="/index.html">home</a>
    <div class="split">
        <div class="d-none d-md-block">
            <div class="dropdown">
                <button class="dropBtn">Soal</button>
                <div class="dropdown-content">
                    <a href="#">twk</a>
                    <a href="#">tiu</a>
                    <a href="#">top</a>
                </div>
            </div>
            <a href="/data/html/twk.html">twk</a>
            <a href="#">tiu</a>
            <a href="#">top</a>
        </div>
        <div class="d-block d-md-none">
            <button class="burgerBtn" onclick="openNav()">Menu</button>
            <div id="mySidenav" class="burger-content">
                <a href="javascript:void(0)" class="closeBtn" onclick="closeNav()">&times;</a>
                <div class="dropdown">
                    <button class="dropBtn" onclick="burgerDropBtn()">Soal</button>
                    <div class="dropdown-content">
                        <a href="#">twk</a>
                        <a href="#">tiu</a>
                        <a href="#">top</a>
                    </div>
                </div>
                <a href="/data/html/twk.html">twk</a>
                <a href="#">tiu</a>
                <a href="#">top</a>
            </div>
        </div>
    </div>
</div>
`;

document.getElementById("navbarSection").innerHTML += navbarTemplate;