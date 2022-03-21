const header = document.createElement('div')
header.innerHTML = `
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <div class="flex space-x-2 items-center">
          <img src="https://emojicdn.elk.sh/🤘🏼" alt="Metal-Hand" class="h-6">
          <span class="font-black italic">tailwind.rocks</span>
        </div>
        <nav>
          <ul class="flex space-x-4 list-none text-slate-800">
            <li>Home</li>
            <li>Über uns</li>
            <li>Service</li>
            <li>Team</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </div>
`

const headerContainer = document.getElementById('header')
headerContainer.appendChild(header)
